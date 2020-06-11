import {request} from "./index";

export function getappointmentlist() {
  return request({
    url: '/api/profiles'
  })
}

export function editappointment(id, status) {
  return request({
    url: '/api/profiles/edit',
    method: 'post',
    params: {
      id,
      status
    }
  })
}