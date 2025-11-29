import { AddNewUserData, AddNewUserVariables, GetImageByIdData, GetImageByIdVariables, ListAllImagesForCurrentUserData, AddDetectionResultToImageData, AddDetectionResultToImageVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useAddNewUser(options?: useDataConnectMutationOptions<AddNewUserData, FirebaseError, AddNewUserVariables>): UseDataConnectMutationResult<AddNewUserData, AddNewUserVariables>;
export function useAddNewUser(dc: DataConnect, options?: useDataConnectMutationOptions<AddNewUserData, FirebaseError, AddNewUserVariables>): UseDataConnectMutationResult<AddNewUserData, AddNewUserVariables>;

export function useGetImageById(vars: GetImageByIdVariables, options?: useDataConnectQueryOptions<GetImageByIdData>): UseDataConnectQueryResult<GetImageByIdData, GetImageByIdVariables>;
export function useGetImageById(dc: DataConnect, vars: GetImageByIdVariables, options?: useDataConnectQueryOptions<GetImageByIdData>): UseDataConnectQueryResult<GetImageByIdData, GetImageByIdVariables>;

export function useListAllImagesForCurrentUser(options?: useDataConnectQueryOptions<ListAllImagesForCurrentUserData>): UseDataConnectQueryResult<ListAllImagesForCurrentUserData, undefined>;
export function useListAllImagesForCurrentUser(dc: DataConnect, options?: useDataConnectQueryOptions<ListAllImagesForCurrentUserData>): UseDataConnectQueryResult<ListAllImagesForCurrentUserData, undefined>;

export function useAddDetectionResultToImage(options?: useDataConnectMutationOptions<AddDetectionResultToImageData, FirebaseError, AddDetectionResultToImageVariables>): UseDataConnectMutationResult<AddDetectionResultToImageData, AddDetectionResultToImageVariables>;
export function useAddDetectionResultToImage(dc: DataConnect, options?: useDataConnectMutationOptions<AddDetectionResultToImageData, FirebaseError, AddDetectionResultToImageVariables>): UseDataConnectMutationResult<AddDetectionResultToImageData, AddDetectionResultToImageVariables>;
