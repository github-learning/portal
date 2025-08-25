import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
export function showConfirm({
  title = "确认删除",
  content = "是否确认删除",
}: {
  title?: string;
  content?: string;
}) {
  return new Promise<void>((resolve, reject) => {
    Modal.confirm({
      title,
      icon: <ExclamationCircleOutlined />,
      cancelText: "取消",
      okText: "确定",

      content,
      onOk() {
        resolve();
      },
      onCancel() {
        reject();
      },
    });
  });
}
