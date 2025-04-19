import { Flex, Table } from "antd";
import { useMemo } from "react";
import DeleteModal from "../../users/components/DeleteModal";
import useUsersGet from "../../../hooks/useUsersGet";
import moment from "moment";
import LockUserModal from "../../users/components/LockUserModal";
import UpdatePasswordModal from "../../users/components/UpdatePasswordModal";

export default function IdolTable() {
  const { data: users, isLoading } = useUsersGet();

  const columns = useMemo(() => {
    return [
      {
        title: "Tên Đăng Nhập",
        dataIndex: "username",
        key: "username",
      },
      {
        title: "Tên Hiển Thị",
        dataIndex: "displayName",
        key: "displayName",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Người Theo Dõi",
        dataIndex: "followers",
        key: "followers",
      },
      {
        title: "Ngày Tạo",
        dataIndex: "createdAt",
        key: "createdAt",
        align: "center",
        render: (createdAt) => {
          return <p>{moment(createdAt).format("DD/MM/YYYY HH:mm:ss")}</p>;
        },
      },
      {
        title: "Hành Động",
        dataIndex: "action",
        key: "aciton",
        align: "center",
        width: 300,
        render: (_, record) => {
          return (
            <Flex gap={10} justify="center">
              <DeleteModal record={record} />
              <UpdatePasswordModal record={record} />
            </Flex>
          );
        },
      },
    ];
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={users?.data}
      loading={isLoading}
      scroll={{ y: 500 }}
    />
  );
}
