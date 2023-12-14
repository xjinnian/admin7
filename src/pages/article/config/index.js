import moment from "moment";

export const columns = [
  { name: "id", align: "left", label: "ID", field: "id" },
  { name: "snippet", align: "left", label: "摘要", field: "snippet" },
  { name: "author", align: "left", label: "作者", field: "author" },
  { name: "type", align: "left", label: "类型", field: "type" },
  { name: "is_top", align: "left", label: "置顶", field: "is_top" },
  { name: "is_best", align: "left", label: "加精", field: "is_best" },
  { name: "like", align: "left", label: "点赞数", field: "like" },
  { name: "comment", align: "left", label: "评论数", field: "comment" },

  { name: "topic", align: "left", label: "话题", field: "topic" },
  { name: "updateRecord", align: "left", label: "助手", field: "updateRecord" },

  {
    name: "status",
    align: "left",
    label: "状态",
    field: "status",
  },

  {
    name: "createdAt",
    align: "left",
    label: "创建时间",
    field: "createdAt",

    format: (val) => (val ? moment(val).format("YYYY-MM-DD HH:mm:ss ") : ""),
  },
  {
    name: "updatedAt",
    align: "left",
    label: "更新时间",
    field: "updatedAt",
    format: (val) => (val ? moment(val).format("YYYY-MM-DD HH:mm:ss ") : ""),
  },

  {
    name: "handle",
    align: "left",
    label: "操作",
    field: "handle",
    style: "width: 160px",
  },
];
