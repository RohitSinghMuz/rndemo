import { StorageData } from "src/constants/StorageConstant";
import { getObject } from "./AsyncStorageUtils";
import { DATA_TYPE } from "./DateTimeUtils";

let contactInfo:any;

export const contactInfoObject = async (): Promise<any> => {
  if (contactInfo === null || contactInfo === undefined) {
    const localCotractInfo = await getObject(StorageData.CONTACT);
    console.log('contactInfo not available yet');
    if (
      localCotractInfo &&
      typeof localCotractInfo === DATA_TYPE.OBJECT &&
      Object.keys(localCotractInfo).length > 0
    ) {
      contactInfo = localCotractInfo;
    }
  }
  return contactInfo;
};

export const resetcontactInfoObject = async () => {
  console.log('contactInfo Object Reset');
  contactInfo = null;
};

export default contactInfoObject;
