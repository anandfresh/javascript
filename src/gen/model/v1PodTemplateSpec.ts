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
import { V1ObjectMeta } from './v1ObjectMeta';
import { V1PodSpec } from './v1PodSpec';

/**
* PodTemplateSpec describes the data a pod should have when created from a template
*/
export class V1PodTemplateSpec {
    'metadata'?: V1ObjectMeta;
    'spec'?: V1PodSpec;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta"
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1PodSpec"
        }    ];

    static getAttributeTypeMap() {
        return V1PodTemplateSpec.attributeTypeMap;
    }
}

