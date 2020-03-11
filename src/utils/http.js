import axios from 'axios'
import qs from 'qs'
export const get = ({
  url,
  params,
  data='',
  method='get'
}) => {
  return axios({
    url,
    params,
    data:qs.stringify(data),
    method,
  })
  .then((result) => {
    return result.data
  })
  .catch((err) => {
    return err.message
  })
}