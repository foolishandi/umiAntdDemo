import { Button, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { getUserList } from '@/services/userlist';

const UserList = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState([]);
  useEffect(() => {
    setLoading(true);
    getUserList().then((res) => {
      setLoading(false);
      setdata(res.data.data);
    });
  }, []);

  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
  };
  const columns = [
    {
      title: '姓名',
      dataIndex: 'username',
      key: 'username',
      sorter: (a, b) => a.username.localeCompare(b.username, 'zh'),
      sortOrder: sortedInfo.columnKey === 'username' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: '职位',
      dataIndex: 'role',
      key: 'role',
      filters: [
        {
          text: '主管',
          value: '主管',
        },
        {
          text: '职员',
          value: '职员',
        },
      ],
      filteredValue: filteredInfo.role || null,
      onFilter: (value, record) => record.role.includes(value),
      ellipsis: true,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: () => (
        <>
          <Button>编辑</Button>
          <Button>删除</Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Space
        style={{
          marginBottom: 16,
          float: 'right',
        }}
      >
        <Button onClick={setAgeSort}>年龄排序</Button>
        <Button onClick={clearFilters}>清除过滤</Button>
        <Button onClick={clearAll}>清除排序过滤</Button>
      </Space>
      <Table
        columns={columns}
        dataSource={data}
        onChange={handleChange}
        loading={loading}
        rowKey={(record) => record.id}
        pagination={{ pageSize: 5 }}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.description}
            </p>
          ),
          rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
      />
    </>
  );
};

export default UserList;
