// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IRequestPayload } from "@fsi/appointment-starter-kit";
import { sendRequest } from "./httpPortal.helper";

//Your gateway endpoint URL, here it's the serverless function endpoint example
const endpoint = 'api/FSIConnect';

export const delegator = async (request: IRequestPayload) => {   
    const result = await sendRequest(endpoint, {
        method: 'POST',
        data: request
    });
    return result;
}
