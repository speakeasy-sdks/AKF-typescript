<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "PetStore";
import { AddPetResponse, NewPet } from "PetStore/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK();

const req: shared.NewPet = {
  name: "Terrence Rau",
  tag: "nulla",
};

sdk.addPet(req).then((res: AddPetResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->