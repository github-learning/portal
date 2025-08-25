import { Button, Drawer, Spin, message } from 'antd';
import React, { useState } from 'react';
import styles from './functionsMenuDrawer.module.less';
import { closeSrc } from './closeSrc';
import { useCommonFunctionsData } from './useCommonFunctionsData';
import { SvgIconLocal, rcRequest } from '@core/rc-components';
import canAdd from '@/assets/svgo/canAdd.svg';
import { useResourceFunctionsData } from './useResourceFunctionsData';
import { DrawerMenuItem } from './DrawerMenuItem';

import { apiConfig } from 'remote/shared';
import { showConfirm } from './showConfirm';
import { nanoid } from 'nanoid';

import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  DragOverlay,
  MouseSensor,
  TouchSensor,
} from '@dnd-kit/core';
import {
  arrayMove,
  rectSwappingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
interface IFunctionsMenuDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  isEdit: boolean;
  setIsEdit: (open: boolean) => void;

  isDefaultEdit?: boolean;
}

export const FunctionsMenuDrawer = ({
  open,
  setOpen,
  isEdit,
  setIsEdit,
  isDefaultEdit = false,
}: IFunctionsMenuDrawerProps) => {
  const [loading, setLoading] = useState(false);
  const [activeItem, setActiveItem] = useState<any>(null);

  const [systemItems, updateSystemItems] = useState<any[]>([]);
  const [systemItemsObj, updateSystemItemsObj] = useState({});
  const {
    commonFunctionsData,
    commonFunctionsLoading,
    refreshCommonFunctions,
  } = useCommonFunctionsData({
    onSuccess(data) {
      if (data && Array.isArray(data)) {
        const sObj = data.reduce((memo, cur) => {
          memo[cur.resourceId] = cur;
          return memo;
        }, {});
        updateSystemItemsObj(sObj);
        updateSystemItems(
          data.map((d) => {
            return {
              ...d,
              _mapId: nanoid(),
              _id: d.id,
            };
          }),
        );
      } else {
        updateSystemItemsObj({});
        updateSystemItems([]);
      }
    },
  });

  const { resourceFunctionsData, resourceFunctionsLoading } =
    useResourceFunctionsData();

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10, // 10px
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 400,
        tolerance: 5,
      },
    }),
  );

  const disabledAdd = !!(
    systemItems &&
    Array.isArray(systemItems) &&
    systemItems.length &&
    systemItems.length >= 14
  );

  const disUpdate = () => {
    window.dispatchEvent(
      new CustomEvent('refreshCommonFunctions', {
        // 允许冒泡
        bubbles: true,
      }),
    );
  };

  const handleAddItem = async (item) => {
    // await rcRequest(`${apiConfig.apiUims}/v1/users/common/functions`, {
    //   method: 'post',
    //   data: item,
    //   headers: {
    //     'system-id': '1',
    //   },
    // });
    // await refreshCommonFunctions();

    updateSystemItems((old) => [
      ...old,
      {
        ...item,
        _mapId: nanoid(),
      },
    ]);
    updateSystemItemsObj((old) => ({
      ...old,
      [item.resourceId]: {
        ...item,
      },
    }));
  };

  const handleRemoveItem = async (item) => {
    updateSystemItems((old) => {
      return old.filter((o) => {
        if (item._id) {
          return o._id !== item._id;
        }
        if (item._mapId) {
          return o._mapId !== item._mapId;
        }
        return o.reourceId !== item.reourceId;
      });
    });
    updateSystemItemsObj((old) => ({
      ...old,
      [item.resourceId]: undefined,
    }));
  };

  const handleSave = async () => {
    await showConfirm({
      title: '是否保存',
      content: '是否保存已编辑的内容？',
    });
    try {
      setLoading(true);
      await rcRequest(
        `${apiConfig.apiUims}/v1/users/common/functions/save-batch`,
        {
          method: 'post',
          data: systemItems.map((s, index) => {
            return {
              ...s,
              orderNum: index + 1,
              id: s._id || '',
              _id: undefined,
              iconPath: undefined,
              functionCode: undefined,
              resourceName: undefined,
              pcPath: undefined,
            };
          }),
          headers: {
            'system-id': '1',
          },
        },
      );
      await refreshCommonFunctions();
      setLoading(false);
      message.success('保存成功');
      setIsEdit(false);
    } catch (error) {
      setLoading(false);
    }
    disUpdate();
  };

  function handleDragStart(event) {
    const { active } = event;

    setActiveItem(active?.data?.current || {});
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    updateSystemItems((items) => {
      const oldIndex = items.findIndex((i) => i._mapId === active.id);
      const newIndex = items.findIndex((i) => i._mapId === over.id);

      return arrayMove(items, oldIndex, newIndex);
    });

    // if (active.id !== over.id) {

    // }
  }

  return (
    <Drawer
      placement="right"
      width={1048}
      bodyStyle={{
        padding: 0,
      }}
      headerStyle={{
        display: 'none',
      }}
      open={open}
      onClose={() => {
        setOpen(false);
        disUpdate();
      }}
    >
      <Spin
        spinning={commonFunctionsLoading || resourceFunctionsLoading || loading}
      >
        <div className={styles.functionsMenuDrawerWrap}>
          <div className={styles.bannerLine}>
            <div className={styles.bzzxText}>全部应用</div>
            <div className={styles.closeImgWrap} onClick={() => setOpen(false)}>
              <img className={styles.artRightArrow} src={closeSrc} alt="" />
            </div>
          </div>
          <div className={styles.functionsMenuDrawerInner}>
            <div className={styles.systemNameHeader}>常用功能</div>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={systemItems || []}
                strategy={rectSwappingStrategy}
              >
                <div className={styles.gridWrap}>
                  {(systemItems || []).map((item, itemIndex) => {
                    return (
                      <DrawerMenuItem
                        {...item}
                        systemId={item.systemId}
                        isEdit={false}
                        isRemove={isEdit}
                        dragId={item._mapId}
                        key={
                          (item.id || item._id || item._mapId) +
                          item.title +
                          itemIndex
                        }
                        handleAddItem={handleAddItem}
                        handleRemoveItem={handleRemoveItem}
                      />
                    );
                  })}

                  {!disabledAdd && (
                    <SvgIconLocal svg={canAdd} width="48px" height="48px" />
                  )}
                </div>
              </SortableContext>
              <DragOverlay>
                {activeItem ? (
                  <DrawerMenuItem
                    iconPath={activeItem?.iconPath}
                    resourceName={activeItem?.resourceName}
                    isRemove={false}
                    isEdit={false}
                  />
                ) : null}
              </DragOverlay>
            </DndContext>
            {(resourceFunctionsData || []).map((d, index) => {
              return (
                <div key={d.systemId + d.systemName + index}>
                  <div className={styles.systemNameHeader}>{d.systemName}</div>
                  <div className={styles.gridWrap}>
                    {(d.resourceList || []).map((r, rIndex) => {
                      return (
                        <DrawerMenuItem
                          {...r}
                          systemId={d.systemId}
                          isEdit={
                            isEdit && !systemItemsObj[r.id] && !disabledAdd
                          }
                          key={r.id + r.title + rIndex}
                          handleAddItem={handleAddItem}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.functionsMenuDrawerFooter}>
            {isEdit ? (
              <>
                <Button
                  onClick={() => {
                    setIsEdit(false);
                  }}
                >
                  取消
                </Button>
                <Button
                  style={{
                    marginLeft: '10px',
                  }}
                  type="primary"
                  onClick={() => {
                    handleSave();
                  }}
                >
                  保存
                </Button>
              </>
            ) : (
              <>
                <Button
                  type="primary"
                  onClick={() => {
                    setIsEdit(true);
                  }}
                >
                  编辑
                </Button>
              </>
            )}
          </div>
        </div>
      </Spin>
    </Drawer>
  );
};
