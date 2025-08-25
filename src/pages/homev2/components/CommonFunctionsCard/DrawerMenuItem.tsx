import React from 'react';
import styles from './drawerMenuItem.module.less';
import { ParseUrl2Svg, SvgIconLocal } from '@core/rc-components';
import defaultMenuItem from '@/assets/svgo/defaultMenuItem.svg';
import { checkSystemApi } from '../checkSystemApi';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { pcPathAdapter } from '@/utils/pcPathAdapter';

export const DrawerMenuItem = (props: {
  iconPath?: string;
  title?: string;
  id?: string;
  isEdit?: boolean;
  handleAddItem?: Function;
  handleRemoveItem?: Function;
  systemId?: string;
  systemPcPath?: string;
  isRemove?: boolean;
  resourceName?: string;
  resourceId?: string;
  dragId?: string;
  pcPath?: string;
  isVertical?: boolean; // 新增竖向排列控制属性
}) => {
  const {
    iconPath,
    title,
    id,
    isEdit,
    handleAddItem,
    systemId = '',
    systemPcPath,
    resourceName,
    isRemove,
    handleRemoveItem,
    resourceId,
    dragId = '',
    pcPath,
    isVertical = false, // 默认为横向排列
    ...rest
  } = props;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: dragId,
      disabled: !dragId || !isRemove,
      data: {
        ...props,
      },
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // 根据isVertical选择对应的样式类
  const menuItemClass = isVertical
    ? styles.drawerMenuItemVertical
    : styles.drawerMenuItem;
  const textClass = isVertical
    ? styles.drawerMenuItemTextVertical
    : styles.drawerMenuItemText;
  const iconWrapClass = isVertical ? styles.iconWrapVertical : styles.iconWrap;
  const imgWrapClass = isVertical
    ? styles.menuItemImgWrapVertical
    : styles.menuItemImgWrap;

  return (
    <div
      className={menuItemClass}
      ref={setNodeRef}
      style={{
        ...style,
        cursor: dragId && isRemove ? 'move' : 'unset',
        userSelect: dragId && isRemove ? 'none' : 'unset',
      }}
      {...attributes}
      {...listeners}
      onClick={async (e) => {
        if (isEdit || isRemove) {
          return false;
        }
        e.stopPropagation();
        e.preventDefault();
        if (systemPcPath?.startsWith('http')) {
          return window.open(systemPcPath);
        }

        if (systemPcPath) {
          await checkSystemApi({
            systemId,
            resourceId: resourceId || id,
            isSystem: false,
          });
          let _systemPcPath = pcPathAdapter(systemPcPath || '', {
            systemId,
            pcPath,
          });

          window.open(_systemPcPath);
        }
      }}
    >
      <div className={iconWrapClass}>
        {iconPath ? (
          <div
            className={imgWrapClass}
            style={{
              cursor: dragId && isRemove ? 'move' : 'unset',
            }}
          >
            <ParseUrl2Svg src={iconPath} imgHeight={'30px'} imgWidth={'30px'} />
          </div>
        ) : (
          <SvgIconLocal svg={defaultMenuItem} width="48px" height="48px" />
        )}
        {isEdit ? (
          <div
            className={styles.menuItemImgWrapEditor}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              isEdit &&
                handleAddItem &&
                handleAddItem({
                  resourceId: id,
                  systemId,
                  resourceName: title,
                  iconPath,
                });
            }}
          >
            <span>+</span>
          </div>
        ) : null}
        {isRemove ? (
          <div
            className={styles.menuItemImgWrapRemove}
            onClick={(e) => {
              console.log(e, 'eee');
              e.preventDefault();
              e.stopPropagation();
              isRemove &&
                handleRemoveItem &&
                handleRemoveItem({
                  ...rest,
                  id,
                  resourceId: resourceId || id,
                  systemId,
                  resourceName: resourceName || title,
                  iconPath,
                });
            }}
          >
            <span>x</span>
          </div>
        ) : null}
      </div>
      <div className={textClass}>{title || resourceName}</div>
    </div>
  );
};
