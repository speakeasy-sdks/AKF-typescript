# SDK

## Overview

Swagger Petstore: A sample API that uses a petstore as an example to demonstrate features in the OpenAPI 3.0 specification

### Available Operations

* [addPet](#addpet) - Creates a new pet in the store. Duplicates are allowed
* [deletePet](#deletepet) - deletes a single pet based on the ID supplied
* [findPetById](#findpetbyid) - Returns a user based on a single ID, if the user does not have access to the pet
* [findPets](#findpets) - Returns all pets from the system that the user has access to
Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.

Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.


## addPet

Creates a new pet in the store. Duplicates are allowed

### Example Usage

```typescript
import { SDK } from "PetStore";
import { AddPetResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new SDK();

sdk.sdk.addPet({
  name: "Dallas Kassulke",
  tag: "suscipit",
}).then((res: AddPetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deletePet

deletes a single pet based on the ID supplied

### Example Usage

```typescript
import { SDK } from "PetStore";
import { DeletePetResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new SDK();

sdk.sdk.deletePet({
  id: 437587,
}).then((res: DeletePetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## findPetById

Returns a user based on a single ID, if the user does not have access to the pet

### Example Usage

```typescript
import { SDK } from "PetStore";
import { FindPetByIdResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new SDK();

sdk.sdk.findPetById({
  id: 297534,
}).then((res: FindPetByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## findPets

Returns all pets from the system that the user has access to
Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.

Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.


### Example Usage

```typescript
import { SDK } from "PetStore";
import { FindPetsResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new SDK();

sdk.sdk.findPets({
  limit: 891773,
  tags: [
    "delectus",
  ],
}).then((res: FindPetsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
