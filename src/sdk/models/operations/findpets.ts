/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class FindPetsRequest extends SpeakeasyBase {
  /**
   * maximum number of results to return
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  /**
   * tags to filter by
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string[];
}

export class FindPetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * unexpected error
   */
  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  /**
   * pet response
   */
  @SpeakeasyMetadata({ elemType: shared.Pet })
  pets?: shared.Pet[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
