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

/**
* RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.
*/
export class V1RuleWithOperations {
    /**
    * APIGroups is the API groups the resources belong to. \'*\' is all groups. If \'*\' is present, the length of the slice must be one. Required.
    */
    'apiGroups'?: Array<string>;
    /**
    * APIVersions is the API versions the resources belong to. \'*\' is all versions. If \'*\' is present, the length of the slice must be one. Required.
    */
    'apiVersions'?: Array<string>;
    /**
    * Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If \'*\' is present, the length of the slice must be one. Required.
    */
    'operations'?: Array<string>;
    /**
    * Resources is a list of resources this rule applies to.  For example: \'pods\' means pods. \'pods/log\' means the log subresource of pods. \'*\' means all resources, but not subresources. \'pods/_*\' means all subresources of pods. \'*_/scale\' means all scale subresources. \'*_/_*\' means all resources and their subresources.  If wildcard is present, the validation rule will ensure resources do not overlap with each other.  Depending on the enclosing object, subresources might not be allowed. Required.
    */
    'resources'?: Array<string>;
    /**
    * scope specifies the scope of this rule. Valid values are \"Cluster\", \"Namespaced\", and \"*\" \"Cluster\" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. \"Namespaced\" means that only namespaced resources will match this rule. \"*\" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is \"*\".
    */
    'scope'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiGroups",
            "baseName": "apiGroups",
            "type": "Array<string>"
        },
        {
            "name": "apiVersions",
            "baseName": "apiVersions",
            "type": "Array<string>"
        },
        {
            "name": "operations",
            "baseName": "operations",
            "type": "Array<string>"
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "Array<string>"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1RuleWithOperations.attributeTypeMap;
    }
}

