<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "PetStore";
import { AddPetResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new SDK();

sdk.addPet({
  name: "Terrence Rau",
  tag: "nulla",
}).then((res: AddPetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->