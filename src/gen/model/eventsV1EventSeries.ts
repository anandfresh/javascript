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
import { V1MicroTime } from '../../types';

/**
* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. How often to update the EventSeries is up to the event reporters. The default event reporter in \"k8s.io/client-go/tools/events/event_broadcaster.go\" shows how this struct is updated on heartbeats and can guide customized reporter implementations.
*/
export class EventsV1EventSeries {
    /**
    * count is the number of occurrences in this series up to the last heartbeat time.
    */
    'count': number;
    /**
    * MicroTime is version of Time with microsecond level precision.
    */
    'lastObservedTime': V1MicroTime;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "lastObservedTime",
            "baseName": "lastObservedTime",
            "type": "V1MicroTime"
        }    ];

    static getAttributeTypeMap() {
        return EventsV1EventSeries.attributeTypeMap;
    }
}

