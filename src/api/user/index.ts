import { getRequest } from '@/services/serviceLayer';
import { USER_API_EP } from './endpoints';
import { transformUserData } from './transformers';
import { UserApiResponse } from './types';

export function getUserData() {
  return getRequest({
    url: USER_API_EP(),
  }).then((data) => transformUserData(data as UserApiResponse));
}
