<!-- Start SDK Example Usage -->
```typescript
import {
  shared.NewPet,
  AddPetResponse
} from "PetStore/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "PetStore";
const sdk = new SDK();

const req: shared.NewPet = {
  name: "Terrence Rau",
  tag: "nulla",
};

sdk.addPet(req).then((res: AddPetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->