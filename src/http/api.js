import service from "./index"

export default {
  getTableData() {
    return service.get('api/tableData')
  }
}
