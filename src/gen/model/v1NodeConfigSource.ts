/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.25
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1ConfigMapNodeConfigSource } from './v1ConfigMapNodeConfigSource';

/**
* NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
*/
export class V1NodeConfigSource {
    'configMap'?: V1ConfigMapNodeConfigSource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "configMap",
            "baseName": "configMap",
            "type": "V1ConfigMapNodeConfigSource"
        }    ];

    static getAttributeTypeMap() {
        return V1NodeConfigSource.attributeTypeMap;
    }
}

