import { CommonService } from '@services/CommonService';
import { AppConfig } from '@appConfig/ConfigSettings';
import { Platform } from 'react-native';
import { PLATFORM_OS_TYPE } from 'src/constants/AppConstant';
import { ProfileHomeRequest, ProfileHomeResponse } from './types';
import { ProfileService } from '../EndPoints';

const getSelectBaseCommonHeader = async () => {
  const timestamp = new Date().getTime().toString();

  let headers = {
    API_Version: AppConfig.API_VERSION,
    APP_Version: AppConfig.APP_VERSION,
    timestamp: timestamp,
    USER_AGENT:
      Platform.OS === PLATFORM_OS_TYPE.IOS.toLowerCase()
        ? PLATFORM_OS_TYPE.IOS
        : PLATFORM_OS_TYPE.ANDROID.toLowerCase(),
  };

  return headers;
};

export const ProfileServices={
    homeData: async (
    request: ProfileHomeRequest.ProfileRequest,
  ): Promise<ProfileHomeResponse.ProfileResponse> => {
    const headers = await getSelectBaseCommonHeader();

    return CommonService.redoPostApiCall<
    ProfileHomeResponse.ProfileResponse
    >(
      AppConfig.SELECT_BASE_URL ?? '',
      ProfileService.HomeData,
      request,
      headers,
    );
  },
};


