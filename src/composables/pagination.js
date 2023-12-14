// https://v3.cn.vuejs.org/guide/composition-api-introduction.html#%E5%9C%A8-setup-%E5%86%85%E6%B3%A8%E5%86%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90
import { ref, computed, onMounted, watch, toRefs } from "vue";
export default function pagination_composables() {
  // 使用 `toRefs` 创建对 props 中的 `user` property 的响应式引用
  //   const { user } = toRefs(props)

  const pageSizeOptions = ref(["10", "20", "30", "40", "50", "100"]);
  const currentPage = ref(1);
  const pageSize = ref(10);
  const total = ref(500);
  // const onShowSizeChange = (current, page_size) => {
  //   console.log(current, page_size);
  //   pageSize.value =   page_size;
  // };
  // const onChange = (pageNumber) => {
  //   console.log("Page: ", pageNumber);
  //   currentPage.value = pageNumber;
  // };
  const pagination = ref({
    sortBy: "desc",
    descending: false,
    page: currentPage.value,
    rowsPerPage: pageSize.value,
    rowsNumber: 1000000,
  });
  return {
    pagination,
    pageSizeOptions,
    currentPage,
    pageSize,
    total,
    // onShowSizeChange,
    // onChange,
  };
}
