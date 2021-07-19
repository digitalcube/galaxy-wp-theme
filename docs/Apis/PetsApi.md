# PetsApi

All URIs are relative to *http://petstore.swagger.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPets**](PetsApi.md#createPets) | **POST** /pets | Create a pet
[**listPets**](PetsApi.md#listPets) | **GET** /pets | List all pets
[**showPetById**](PetsApi.md#showPetById) | **GET** /pets/{petId} | Info for a specific pet


<a name="createPets"></a>
# **createPets**
> createPets()

Create a pet

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listPets"></a>
# **listPets**
> List listPets(limit)

List all pets

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Integer**| How many items to return at one time (max 100) | [optional] [default to null]

### Return type

[**List**](../Models/Pet.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="showPetById"></a>
# **showPetById**
> List showPetById(petId)

Info for a specific pet

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **String**| The id of the pet to retrieve | [default to null]

### Return type

[**List**](../Models/Pet.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

