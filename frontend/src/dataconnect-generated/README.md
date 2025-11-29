# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetImageById*](#getimagebyid)
  - [*ListAllImagesForCurrentUser*](#listallimagesforcurrentuser)
- [**Mutations**](#mutations)
  - [*AddNewUser*](#addnewuser)
  - [*AddDetectionResultToImage*](#adddetectionresulttoimage)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetImageById
You can execute the `GetImageById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getImageById(vars: GetImageByIdVariables): QueryPromise<GetImageByIdData, GetImageByIdVariables>;

interface GetImageByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetImageByIdVariables): QueryRef<GetImageByIdData, GetImageByIdVariables>;
}
export const getImageByIdRef: GetImageByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getImageById(dc: DataConnect, vars: GetImageByIdVariables): QueryPromise<GetImageByIdData, GetImageByIdVariables>;

interface GetImageByIdRef {
  ...
  (dc: DataConnect, vars: GetImageByIdVariables): QueryRef<GetImageByIdData, GetImageByIdVariables>;
}
export const getImageByIdRef: GetImageByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getImageByIdRef:
```typescript
const name = getImageByIdRef.operationName;
console.log(name);
```

### Variables
The `GetImageById` query requires an argument of type `GetImageByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetImageByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetImageById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetImageByIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetImageById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getImageById, GetImageByIdVariables } from '@dataconnect/generated';

// The `GetImageById` query requires an argument of type `GetImageByIdVariables`:
const getImageByIdVars: GetImageByIdVariables = {
  id: ..., 
};

// Call the `getImageById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getImageById(getImageByIdVars);
// Variables can be defined inline as well.
const { data } = await getImageById({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getImageById(dataConnect, getImageByIdVars);

console.log(data.image);

// Or, you can use the `Promise` API.
getImageById(getImageByIdVars).then((response) => {
  const data = response.data;
  console.log(data.image);
});
```

### Using `GetImageById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getImageByIdRef, GetImageByIdVariables } from '@dataconnect/generated';

// The `GetImageById` query requires an argument of type `GetImageByIdVariables`:
const getImageByIdVars: GetImageByIdVariables = {
  id: ..., 
};

// Call the `getImageByIdRef()` function to get a reference to the query.
const ref = getImageByIdRef(getImageByIdVars);
// Variables can be defined inline as well.
const ref = getImageByIdRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getImageByIdRef(dataConnect, getImageByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.image);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.image);
});
```

## ListAllImagesForCurrentUser
You can execute the `ListAllImagesForCurrentUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAllImagesForCurrentUser(): QueryPromise<ListAllImagesForCurrentUserData, undefined>;

interface ListAllImagesForCurrentUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllImagesForCurrentUserData, undefined>;
}
export const listAllImagesForCurrentUserRef: ListAllImagesForCurrentUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAllImagesForCurrentUser(dc: DataConnect): QueryPromise<ListAllImagesForCurrentUserData, undefined>;

interface ListAllImagesForCurrentUserRef {
  ...
  (dc: DataConnect): QueryRef<ListAllImagesForCurrentUserData, undefined>;
}
export const listAllImagesForCurrentUserRef: ListAllImagesForCurrentUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAllImagesForCurrentUserRef:
```typescript
const name = listAllImagesForCurrentUserRef.operationName;
console.log(name);
```

### Variables
The `ListAllImagesForCurrentUser` query has no variables.
### Return Type
Recall that executing the `ListAllImagesForCurrentUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAllImagesForCurrentUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAllImagesForCurrentUserData {
  images: ({
    id: UUIDString;
    fileName: string;
    imageUrl: string;
    notes?: string | null;
    uploadedAt: TimestampString;
  } & Image_Key)[];
}
```
### Using `ListAllImagesForCurrentUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAllImagesForCurrentUser } from '@dataconnect/generated';


// Call the `listAllImagesForCurrentUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAllImagesForCurrentUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAllImagesForCurrentUser(dataConnect);

console.log(data.images);

// Or, you can use the `Promise` API.
listAllImagesForCurrentUser().then((response) => {
  const data = response.data;
  console.log(data.images);
});
```

### Using `ListAllImagesForCurrentUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAllImagesForCurrentUserRef } from '@dataconnect/generated';


// Call the `listAllImagesForCurrentUserRef()` function to get a reference to the query.
const ref = listAllImagesForCurrentUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAllImagesForCurrentUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.images);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.images);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## AddNewUser
You can execute the `AddNewUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addNewUser(vars: AddNewUserVariables): MutationPromise<AddNewUserData, AddNewUserVariables>;

interface AddNewUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddNewUserVariables): MutationRef<AddNewUserData, AddNewUserVariables>;
}
export const addNewUserRef: AddNewUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addNewUser(dc: DataConnect, vars: AddNewUserVariables): MutationPromise<AddNewUserData, AddNewUserVariables>;

interface AddNewUserRef {
  ...
  (dc: DataConnect, vars: AddNewUserVariables): MutationRef<AddNewUserData, AddNewUserVariables>;
}
export const addNewUserRef: AddNewUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addNewUserRef:
```typescript
const name = addNewUserRef.operationName;
console.log(name);
```

### Variables
The `AddNewUser` mutation requires an argument of type `AddNewUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddNewUserVariables {
  displayName: string;
  email?: string | null;
  photoUrl?: string | null;
}
```
### Return Type
Recall that executing the `AddNewUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddNewUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddNewUserData {
  user_insert: User_Key;
}
```
### Using `AddNewUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addNewUser, AddNewUserVariables } from '@dataconnect/generated';

// The `AddNewUser` mutation requires an argument of type `AddNewUserVariables`:
const addNewUserVars: AddNewUserVariables = {
  displayName: ..., 
  email: ..., // optional
  photoUrl: ..., // optional
};

// Call the `addNewUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addNewUser(addNewUserVars);
// Variables can be defined inline as well.
const { data } = await addNewUser({ displayName: ..., email: ..., photoUrl: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addNewUser(dataConnect, addNewUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
addNewUser(addNewUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `AddNewUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addNewUserRef, AddNewUserVariables } from '@dataconnect/generated';

// The `AddNewUser` mutation requires an argument of type `AddNewUserVariables`:
const addNewUserVars: AddNewUserVariables = {
  displayName: ..., 
  email: ..., // optional
  photoUrl: ..., // optional
};

// Call the `addNewUserRef()` function to get a reference to the mutation.
const ref = addNewUserRef(addNewUserVars);
// Variables can be defined inline as well.
const ref = addNewUserRef({ displayName: ..., email: ..., photoUrl: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addNewUserRef(dataConnect, addNewUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## AddDetectionResultToImage
You can execute the `AddDetectionResultToImage` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addDetectionResultToImage(vars: AddDetectionResultToImageVariables): MutationPromise<AddDetectionResultToImageData, AddDetectionResultToImageVariables>;

interface AddDetectionResultToImageRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddDetectionResultToImageVariables): MutationRef<AddDetectionResultToImageData, AddDetectionResultToImageVariables>;
}
export const addDetectionResultToImageRef: AddDetectionResultToImageRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addDetectionResultToImage(dc: DataConnect, vars: AddDetectionResultToImageVariables): MutationPromise<AddDetectionResultToImageData, AddDetectionResultToImageVariables>;

interface AddDetectionResultToImageRef {
  ...
  (dc: DataConnect, vars: AddDetectionResultToImageVariables): MutationRef<AddDetectionResultToImageData, AddDetectionResultToImageVariables>;
}
export const addDetectionResultToImageRef: AddDetectionResultToImageRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addDetectionResultToImageRef:
```typescript
const name = addDetectionResultToImageRef.operationName;
console.log(name);
```

### Variables
The `AddDetectionResultToImage` mutation requires an argument of type `AddDetectionResultToImageVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddDetectionResultToImageVariables {
  imageId: UUIDString;
  detectedAt: TimestampString;
  rawDetectionData?: string | null;
}
```
### Return Type
Recall that executing the `AddDetectionResultToImage` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddDetectionResultToImageData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddDetectionResultToImageData {
  detectionResult_insert: DetectionResult_Key;
}
```
### Using `AddDetectionResultToImage`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addDetectionResultToImage, AddDetectionResultToImageVariables } from '@dataconnect/generated';

// The `AddDetectionResultToImage` mutation requires an argument of type `AddDetectionResultToImageVariables`:
const addDetectionResultToImageVars: AddDetectionResultToImageVariables = {
  imageId: ..., 
  detectedAt: ..., 
  rawDetectionData: ..., // optional
};

// Call the `addDetectionResultToImage()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addDetectionResultToImage(addDetectionResultToImageVars);
// Variables can be defined inline as well.
const { data } = await addDetectionResultToImage({ imageId: ..., detectedAt: ..., rawDetectionData: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addDetectionResultToImage(dataConnect, addDetectionResultToImageVars);

console.log(data.detectionResult_insert);

// Or, you can use the `Promise` API.
addDetectionResultToImage(addDetectionResultToImageVars).then((response) => {
  const data = response.data;
  console.log(data.detectionResult_insert);
});
```

### Using `AddDetectionResultToImage`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addDetectionResultToImageRef, AddDetectionResultToImageVariables } from '@dataconnect/generated';

// The `AddDetectionResultToImage` mutation requires an argument of type `AddDetectionResultToImageVariables`:
const addDetectionResultToImageVars: AddDetectionResultToImageVariables = {
  imageId: ..., 
  detectedAt: ..., 
  rawDetectionData: ..., // optional
};

// Call the `addDetectionResultToImageRef()` function to get a reference to the mutation.
const ref = addDetectionResultToImageRef(addDetectionResultToImageVars);
// Variables can be defined inline as well.
const ref = addDetectionResultToImageRef({ imageId: ..., detectedAt: ..., rawDetectionData: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addDetectionResultToImageRef(dataConnect, addDetectionResultToImageVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.detectionResult_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.detectionResult_insert);
});
```

