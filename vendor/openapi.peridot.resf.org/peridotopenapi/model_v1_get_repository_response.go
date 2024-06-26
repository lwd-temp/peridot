/*
 * peridot/proto/v1/batch.proto
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: version not set
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package peridotopenapi

import (
	"encoding/json"
)

// V1GetRepositoryResponse struct for V1GetRepositoryResponse
type V1GetRepositoryResponse struct {
	Repository *V1Repository `json:"repository,omitempty"`
}

// NewV1GetRepositoryResponse instantiates a new V1GetRepositoryResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewV1GetRepositoryResponse() *V1GetRepositoryResponse {
	this := V1GetRepositoryResponse{}
	return &this
}

// NewV1GetRepositoryResponseWithDefaults instantiates a new V1GetRepositoryResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewV1GetRepositoryResponseWithDefaults() *V1GetRepositoryResponse {
	this := V1GetRepositoryResponse{}
	return &this
}

// GetRepository returns the Repository field value if set, zero value otherwise.
func (o *V1GetRepositoryResponse) GetRepository() V1Repository {
	if o == nil || o.Repository == nil {
		var ret V1Repository
		return ret
	}
	return *o.Repository
}

// GetRepositoryOk returns a tuple with the Repository field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1GetRepositoryResponse) GetRepositoryOk() (*V1Repository, bool) {
	if o == nil || o.Repository == nil {
		return nil, false
	}
	return o.Repository, true
}

// HasRepository returns a boolean if a field has been set.
func (o *V1GetRepositoryResponse) HasRepository() bool {
	if o != nil && o.Repository != nil {
		return true
	}

	return false
}

// SetRepository gets a reference to the given V1Repository and assigns it to the Repository field.
func (o *V1GetRepositoryResponse) SetRepository(v V1Repository) {
	o.Repository = &v
}

func (o V1GetRepositoryResponse) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Repository != nil {
		toSerialize["repository"] = o.Repository
	}
	return json.Marshal(toSerialize)
}

type NullableV1GetRepositoryResponse struct {
	value *V1GetRepositoryResponse
	isSet bool
}

func (v NullableV1GetRepositoryResponse) Get() *V1GetRepositoryResponse {
	return v.value
}

func (v *NullableV1GetRepositoryResponse) Set(val *V1GetRepositoryResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableV1GetRepositoryResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableV1GetRepositoryResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableV1GetRepositoryResponse(val *V1GetRepositoryResponse) *NullableV1GetRepositoryResponse {
	return &NullableV1GetRepositoryResponse{value: val, isSet: true}
}

func (v NullableV1GetRepositoryResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableV1GetRepositoryResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


