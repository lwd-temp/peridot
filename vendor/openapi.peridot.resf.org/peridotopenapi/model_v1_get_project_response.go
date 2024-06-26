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

// V1GetProjectResponse struct for V1GetProjectResponse
type V1GetProjectResponse struct {
	Project *V1Project `json:"project,omitempty"`
}

// NewV1GetProjectResponse instantiates a new V1GetProjectResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewV1GetProjectResponse() *V1GetProjectResponse {
	this := V1GetProjectResponse{}
	return &this
}

// NewV1GetProjectResponseWithDefaults instantiates a new V1GetProjectResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewV1GetProjectResponseWithDefaults() *V1GetProjectResponse {
	this := V1GetProjectResponse{}
	return &this
}

// GetProject returns the Project field value if set, zero value otherwise.
func (o *V1GetProjectResponse) GetProject() V1Project {
	if o == nil || o.Project == nil {
		var ret V1Project
		return ret
	}
	return *o.Project
}

// GetProjectOk returns a tuple with the Project field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1GetProjectResponse) GetProjectOk() (*V1Project, bool) {
	if o == nil || o.Project == nil {
		return nil, false
	}
	return o.Project, true
}

// HasProject returns a boolean if a field has been set.
func (o *V1GetProjectResponse) HasProject() bool {
	if o != nil && o.Project != nil {
		return true
	}

	return false
}

// SetProject gets a reference to the given V1Project and assigns it to the Project field.
func (o *V1GetProjectResponse) SetProject(v V1Project) {
	o.Project = &v
}

func (o V1GetProjectResponse) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Project != nil {
		toSerialize["project"] = o.Project
	}
	return json.Marshal(toSerialize)
}

type NullableV1GetProjectResponse struct {
	value *V1GetProjectResponse
	isSet bool
}

func (v NullableV1GetProjectResponse) Get() *V1GetProjectResponse {
	return v.value
}

func (v *NullableV1GetProjectResponse) Set(val *V1GetProjectResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableV1GetProjectResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableV1GetProjectResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableV1GetProjectResponse(val *V1GetProjectResponse) *NullableV1GetProjectResponse {
	return &NullableV1GetProjectResponse{value: val, isSet: true}
}

func (v NullableV1GetProjectResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableV1GetProjectResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


