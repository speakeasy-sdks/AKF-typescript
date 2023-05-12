/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import axios from "axios";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://petstore.swagger.io/v2"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
  /**
   * Allows overriding the default axios client used by the SDK
   */
  defaultClient?: AxiosInstance;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

/**
 * A sample API that uses a petstore as an example to demonstrate features in the OpenAPI 3.0 specification
 */
export class SDK {
  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "1.7.4";
  private _genVersion = "2.26.4";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
  }

  /**
   * Creates a new pet in the store. Duplicates are allowed
   */
  async addPet(
    req: shared.NewPet,
    config?: AxiosRequestConfig
  ): Promise<operations.AddPetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new shared.NewPet(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pets";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.AddPetResponse = new operations.AddPetResponse({
      statusCode: httpRes.status,
      contentType: contentType,
      rawResponse: httpRes,
    });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.pet = utils.objectToClass(httpRes?.data, shared.Pet);
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
        }
        break;
    }

    return res;
  }

  /**
   * deletes a single pet based on the ID supplied
   */
  async deletePet(
    req: operations.DeletePetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/pets/{id}", req);

    const client: AxiosInstance = this._defaultClient;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "delete",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.DeletePetResponse = new operations.DeletePetResponse({
      statusCode: httpRes.status,
      contentType: contentType,
      rawResponse: httpRes,
    });
    switch (true) {
      case httpRes?.status == 204:
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
        }
        break;
    }

    return res;
  }

  /**
   * Returns a user based on a single ID, if the user does not have access to the pet
   */
  async findPetById(
    req: operations.FindPetByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FindPetByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FindPetByIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/pets/{id}", req);

    const client: AxiosInstance = this._defaultClient;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.FindPetByIdResponse =
      new operations.FindPetByIdResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.pet = utils.objectToClass(httpRes?.data, shared.Pet);
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
        }
        break;
    }

    return res;
  }

  /**
   * Returns all pets from the system that the user has access to
   * Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.
   *
   * Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.
   *
   */
  async findPets(
    req: operations.FindPetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FindPetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FindPetsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pets";

    const client: AxiosInstance = this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.FindPetsResponse = new operations.FindPetsResponse({
      statusCode: httpRes.status,
      contentType: contentType,
      rawResponse: httpRes,
    });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.pets = [];
          const resFieldDepth: number = utils.getResFieldDepth(res);
          res.pets = utils.objectToClass(
            httpRes?.data,
            shared.Pet,
            resFieldDepth
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
        }
        break;
    }

    return res;
  }
}
