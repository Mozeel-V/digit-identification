const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'digit-identification',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const addNewUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddNewUser', inputVars);
}
addNewUserRef.operationName = 'AddNewUser';
exports.addNewUserRef = addNewUserRef;

exports.addNewUser = function addNewUser(dcOrVars, vars) {
  return executeMutation(addNewUserRef(dcOrVars, vars));
};

const getImageByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetImageById', inputVars);
}
getImageByIdRef.operationName = 'GetImageById';
exports.getImageByIdRef = getImageByIdRef;

exports.getImageById = function getImageById(dcOrVars, vars) {
  return executeQuery(getImageByIdRef(dcOrVars, vars));
};

const listAllImagesForCurrentUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAllImagesForCurrentUser');
}
listAllImagesForCurrentUserRef.operationName = 'ListAllImagesForCurrentUser';
exports.listAllImagesForCurrentUserRef = listAllImagesForCurrentUserRef;

exports.listAllImagesForCurrentUser = function listAllImagesForCurrentUser(dc) {
  return executeQuery(listAllImagesForCurrentUserRef(dc));
};

const addDetectionResultToImageRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddDetectionResultToImage', inputVars);
}
addDetectionResultToImageRef.operationName = 'AddDetectionResultToImage';
exports.addDetectionResultToImageRef = addDetectionResultToImageRef;

exports.addDetectionResultToImage = function addDetectionResultToImage(dcOrVars, vars) {
  return executeMutation(addDetectionResultToImageRef(dcOrVars, vars));
};
