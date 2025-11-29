import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddDetectionResultToImageData {
  detectionResult_insert: DetectionResult_Key;
}

export interface AddDetectionResultToImageVariables {
  imageId: UUIDString;
  detectedAt: TimestampString;
  rawDetectionData?: string | null;
}

export interface AddNewUserData {
  user_insert: User_Key;
}

export interface AddNewUserVariables {
  displayName: string;
  email?: string | null;
  photoUrl?: string | null;
}

export interface DetectedObject_Key {
  id: UUIDString;
  __typename?: 'DetectedObject_Key';
}

export interface DetectionResult_Key {
  id: UUIDString;
  __typename?: 'DetectionResult_Key';
}

export interface GetImageByIdData {
  image?: {
    id: UUIDString;
    imageUrl: string;
    fileName: string;
    notes?: string | null;
    uploadedAt: TimestampString;
    detectionResults_on_image: ({
      id: UUIDString;
      detectedAt: TimestampString;
      rawDetectionData?: string | null;
      detectedObjects_on_detectionResult: ({
        id: UUIDString;
        label: string;
        confidence: number;
        x: number;
        y: number;
        width: number;
        height: number;
      } & DetectedObject_Key)[];
    } & DetectionResult_Key)[];
  } & Image_Key;
}

export interface GetImageByIdVariables {
  id: UUIDString;
}

export interface Image_Key {
  id: UUIDString;
  __typename?: 'Image_Key';
}

export interface ListAllImagesForCurrentUserData {
  images: ({
    id: UUIDString;
    fileName: string;
    imageUrl: string;
    notes?: string | null;
    uploadedAt: TimestampString;
  } & Image_Key)[];
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface AddNewUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddNewUserVariables): MutationRef<AddNewUserData, AddNewUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddNewUserVariables): MutationRef<AddNewUserData, AddNewUserVariables>;
  operationName: string;
}
export const addNewUserRef: AddNewUserRef;

export function addNewUser(vars: AddNewUserVariables): MutationPromise<AddNewUserData, AddNewUserVariables>;
export function addNewUser(dc: DataConnect, vars: AddNewUserVariables): MutationPromise<AddNewUserData, AddNewUserVariables>;

interface GetImageByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetImageByIdVariables): QueryRef<GetImageByIdData, GetImageByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetImageByIdVariables): QueryRef<GetImageByIdData, GetImageByIdVariables>;
  operationName: string;
}
export const getImageByIdRef: GetImageByIdRef;

export function getImageById(vars: GetImageByIdVariables): QueryPromise<GetImageByIdData, GetImageByIdVariables>;
export function getImageById(dc: DataConnect, vars: GetImageByIdVariables): QueryPromise<GetImageByIdData, GetImageByIdVariables>;

interface ListAllImagesForCurrentUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllImagesForCurrentUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAllImagesForCurrentUserData, undefined>;
  operationName: string;
}
export const listAllImagesForCurrentUserRef: ListAllImagesForCurrentUserRef;

export function listAllImagesForCurrentUser(): QueryPromise<ListAllImagesForCurrentUserData, undefined>;
export function listAllImagesForCurrentUser(dc: DataConnect): QueryPromise<ListAllImagesForCurrentUserData, undefined>;

interface AddDetectionResultToImageRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddDetectionResultToImageVariables): MutationRef<AddDetectionResultToImageData, AddDetectionResultToImageVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddDetectionResultToImageVariables): MutationRef<AddDetectionResultToImageData, AddDetectionResultToImageVariables>;
  operationName: string;
}
export const addDetectionResultToImageRef: AddDetectionResultToImageRef;

export function addDetectionResultToImage(vars: AddDetectionResultToImageVariables): MutationPromise<AddDetectionResultToImageData, AddDetectionResultToImageVariables>;
export function addDetectionResultToImage(dc: DataConnect, vars: AddDetectionResultToImageVariables): MutationPromise<AddDetectionResultToImageData, AddDetectionResultToImageVariables>;

