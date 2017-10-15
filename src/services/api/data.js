import request from '../../shared/lib/request'

function get(data) {
  return request({
    url:    `${data}.json`,
    method: 'GET'
  });
}

const DataService = {
  get
}

export default DataService;
