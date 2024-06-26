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

// V1ImportRevision ImportRevision is SCM metadata as well as versioning information of a specific import element.
type V1ImportRevision struct {
	ScmHash *string `json:"scmHash,omitempty"`
	ScmBranchName *string `json:"scmBranchName,omitempty"`
	Vre *V1VersionRelease `json:"vre,omitempty"`
	Module *bool `json:"module,omitempty"`
	ModuleStream *bool `json:"moduleStream,omitempty"`
	ScmUrl *string `json:"scmUrl,omitempty"`
	PackageVersionId *string `json:"packageVersionId,omitempty"`
}

// NewV1ImportRevision instantiates a new V1ImportRevision object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewV1ImportRevision() *V1ImportRevision {
	this := V1ImportRevision{}
	return &this
}

// NewV1ImportRevisionWithDefaults instantiates a new V1ImportRevision object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewV1ImportRevisionWithDefaults() *V1ImportRevision {
	this := V1ImportRevision{}
	return &this
}

// GetScmHash returns the ScmHash field value if set, zero value otherwise.
func (o *V1ImportRevision) GetScmHash() string {
	if o == nil || o.ScmHash == nil {
		var ret string
		return ret
	}
	return *o.ScmHash
}

// GetScmHashOk returns a tuple with the ScmHash field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1ImportRevision) GetScmHashOk() (*string, bool) {
	if o == nil || o.ScmHash == nil {
		return nil, false
	}
	return o.ScmHash, true
}

// HasScmHash returns a boolean if a field has been set.
func (o *V1ImportRevision) HasScmHash() bool {
	if o != nil && o.ScmHash != nil {
		return true
	}

	return false
}

// SetScmHash gets a reference to the given string and assigns it to the ScmHash field.
func (o *V1ImportRevision) SetScmHash(v string) {
	o.ScmHash = &v
}

// GetScmBranchName returns the ScmBranchName field value if set, zero value otherwise.
func (o *V1ImportRevision) GetScmBranchName() string {
	if o == nil || o.ScmBranchName == nil {
		var ret string
		return ret
	}
	return *o.ScmBranchName
}

// GetScmBranchNameOk returns a tuple with the ScmBranchName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1ImportRevision) GetScmBranchNameOk() (*string, bool) {
	if o == nil || o.ScmBranchName == nil {
		return nil, false
	}
	return o.ScmBranchName, true
}

// HasScmBranchName returns a boolean if a field has been set.
func (o *V1ImportRevision) HasScmBranchName() bool {
	if o != nil && o.ScmBranchName != nil {
		return true
	}

	return false
}

// SetScmBranchName gets a reference to the given string and assigns it to the ScmBranchName field.
func (o *V1ImportRevision) SetScmBranchName(v string) {
	o.ScmBranchName = &v
}

// GetVre returns the Vre field value if set, zero value otherwise.
func (o *V1ImportRevision) GetVre() V1VersionRelease {
	if o == nil || o.Vre == nil {
		var ret V1VersionRelease
		return ret
	}
	return *o.Vre
}

// GetVreOk returns a tuple with the Vre field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1ImportRevision) GetVreOk() (*V1VersionRelease, bool) {
	if o == nil || o.Vre == nil {
		return nil, false
	}
	return o.Vre, true
}

// HasVre returns a boolean if a field has been set.
func (o *V1ImportRevision) HasVre() bool {
	if o != nil && o.Vre != nil {
		return true
	}

	return false
}

// SetVre gets a reference to the given V1VersionRelease and assigns it to the Vre field.
func (o *V1ImportRevision) SetVre(v V1VersionRelease) {
	o.Vre = &v
}

// GetModule returns the Module field value if set, zero value otherwise.
func (o *V1ImportRevision) GetModule() bool {
	if o == nil || o.Module == nil {
		var ret bool
		return ret
	}
	return *o.Module
}

// GetModuleOk returns a tuple with the Module field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1ImportRevision) GetModuleOk() (*bool, bool) {
	if o == nil || o.Module == nil {
		return nil, false
	}
	return o.Module, true
}

// HasModule returns a boolean if a field has been set.
func (o *V1ImportRevision) HasModule() bool {
	if o != nil && o.Module != nil {
		return true
	}

	return false
}

// SetModule gets a reference to the given bool and assigns it to the Module field.
func (o *V1ImportRevision) SetModule(v bool) {
	o.Module = &v
}

// GetModuleStream returns the ModuleStream field value if set, zero value otherwise.
func (o *V1ImportRevision) GetModuleStream() bool {
	if o == nil || o.ModuleStream == nil {
		var ret bool
		return ret
	}
	return *o.ModuleStream
}

// GetModuleStreamOk returns a tuple with the ModuleStream field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1ImportRevision) GetModuleStreamOk() (*bool, bool) {
	if o == nil || o.ModuleStream == nil {
		return nil, false
	}
	return o.ModuleStream, true
}

// HasModuleStream returns a boolean if a field has been set.
func (o *V1ImportRevision) HasModuleStream() bool {
	if o != nil && o.ModuleStream != nil {
		return true
	}

	return false
}

// SetModuleStream gets a reference to the given bool and assigns it to the ModuleStream field.
func (o *V1ImportRevision) SetModuleStream(v bool) {
	o.ModuleStream = &v
}

// GetScmUrl returns the ScmUrl field value if set, zero value otherwise.
func (o *V1ImportRevision) GetScmUrl() string {
	if o == nil || o.ScmUrl == nil {
		var ret string
		return ret
	}
	return *o.ScmUrl
}

// GetScmUrlOk returns a tuple with the ScmUrl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1ImportRevision) GetScmUrlOk() (*string, bool) {
	if o == nil || o.ScmUrl == nil {
		return nil, false
	}
	return o.ScmUrl, true
}

// HasScmUrl returns a boolean if a field has been set.
func (o *V1ImportRevision) HasScmUrl() bool {
	if o != nil && o.ScmUrl != nil {
		return true
	}

	return false
}

// SetScmUrl gets a reference to the given string and assigns it to the ScmUrl field.
func (o *V1ImportRevision) SetScmUrl(v string) {
	o.ScmUrl = &v
}

// GetPackageVersionId returns the PackageVersionId field value if set, zero value otherwise.
func (o *V1ImportRevision) GetPackageVersionId() string {
	if o == nil || o.PackageVersionId == nil {
		var ret string
		return ret
	}
	return *o.PackageVersionId
}

// GetPackageVersionIdOk returns a tuple with the PackageVersionId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1ImportRevision) GetPackageVersionIdOk() (*string, bool) {
	if o == nil || o.PackageVersionId == nil {
		return nil, false
	}
	return o.PackageVersionId, true
}

// HasPackageVersionId returns a boolean if a field has been set.
func (o *V1ImportRevision) HasPackageVersionId() bool {
	if o != nil && o.PackageVersionId != nil {
		return true
	}

	return false
}

// SetPackageVersionId gets a reference to the given string and assigns it to the PackageVersionId field.
func (o *V1ImportRevision) SetPackageVersionId(v string) {
	o.PackageVersionId = &v
}

func (o V1ImportRevision) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.ScmHash != nil {
		toSerialize["scmHash"] = o.ScmHash
	}
	if o.ScmBranchName != nil {
		toSerialize["scmBranchName"] = o.ScmBranchName
	}
	if o.Vre != nil {
		toSerialize["vre"] = o.Vre
	}
	if o.Module != nil {
		toSerialize["module"] = o.Module
	}
	if o.ModuleStream != nil {
		toSerialize["moduleStream"] = o.ModuleStream
	}
	if o.ScmUrl != nil {
		toSerialize["scmUrl"] = o.ScmUrl
	}
	if o.PackageVersionId != nil {
		toSerialize["packageVersionId"] = o.PackageVersionId
	}
	return json.Marshal(toSerialize)
}

type NullableV1ImportRevision struct {
	value *V1ImportRevision
	isSet bool
}

func (v NullableV1ImportRevision) Get() *V1ImportRevision {
	return v.value
}

func (v *NullableV1ImportRevision) Set(val *V1ImportRevision) {
	v.value = val
	v.isSet = true
}

func (v NullableV1ImportRevision) IsSet() bool {
	return v.isSet
}

func (v *NullableV1ImportRevision) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableV1ImportRevision(val *V1ImportRevision) *NullableV1ImportRevision {
	return &NullableV1ImportRevision{value: val, isSet: true}
}

func (v NullableV1ImportRevision) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableV1ImportRevision) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


