import axios from "src/api/commom/axioswapper.js";

let prefix = process.env.API_PREFIX_1;

//
// export const post1 = (params, url) => axios.post(`${prefix}${url}`, params)
// export const get1 = (params, url) => axios.get(`${prefix}${url}`, { params: {...params } })

// 增加

export const handle_create = (params, url = "/packingConfig/create") =>
  axios.post(`${prefix}${url}`, params);
// 删除
export const handle_delete = (params, url = "/packingConfig/delete") =>
  axios.post(`${prefix}${url}`, params);

//修改
export const handle_update = (params, url = "/packingConfig/update") =>
  axios.post(`${prefix}${url}`, params);

//查询

export const handle_read = (params, url = "/packingConfig/all") =>
  axios.get(`${prefix}${url}`, { params: { ...params } });
//详情

export const handle_info = (params, url = "/packingConfig/info") =>
  axios.get(`${prefix}${url}`, { params: { ...params } });
