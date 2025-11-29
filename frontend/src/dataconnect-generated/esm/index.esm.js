import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'digit-identification',
  location: 'us-east4'
};

export const addNewUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddNewUser', inputVars);
}
addNewUserRef.operationName = 'AddNewUser';

export function addNewUser(dcOrVars, vars) {
  return executeMutation(addNewUserRef(dcOrVars, vars));
}

export const getImageByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetImageById', inputVars);
}
getImageByIdRef.operationName = 'GetImageById';

export function getImageById(dcOrVars, vars) {
  return executeQuery(getImageByIdRef(dcOrVars, vars));
}

export const listAllImagesForCurrentUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAllImagesForCurrentUser');
}
listAllImagesForCurrentUserRef.operationName = 'ListAllImagesForCurrentUser';

export function listAllImagesForCurrentUser(dc) {
  return executeQuery(listAllImagesForCurrentUserRef(dc));
}

export const addDetectionResultToImageRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddDetectionResultToImage', inputVars);
}
addDetectionResultToImageRef.operationName = 'AddDetectionResultToImage';

export function addDetectionResultToImage(dcOrVars, vars) {
  return executeMutation(addDetectionResultToImageRef(dcOrVars, vars));
}

