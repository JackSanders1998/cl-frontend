import { type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { Security } from './utils/security';
import { withClerkHandler } from 'svelte-clerk/server';
import { client } from './client/client.gen';

const BASE_URL = 'http://127.0.0.1:8000';

client.setConfig({
	auth: () => 'Bearer eyJhbGciOiJSUzI1NiIsImNhdCI6ImNsX0I3ZDRQRDIyMkFBQSIsImtpZCI6Imluc18ya2xPOUM1alJWc015R0pCcGJTTmhBRjdtYUsiLCJ0eXAiOiJKV1QifQ.eyJhenAiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJleHAiOjIwNTQ1OTAzNTcsImlhdCI6MTczOTIzMDM1NywiaXNzIjoiaHR0cHM6Ly9naXZpbmctcmF2ZW4tOTcuY2xlcmsuYWNjb3VudHMuZGV2IiwianRpIjoiNGMyYTZjOTQzMjAwYmNkNzY0ZTUiLCJuYmYiOjE3MzkyMzAzNTIsInN1YiI6InVzZXJfMmwyU1dTZW9Vc296bzJybDlTcHI1cXdwV1NBIn0.WdPZvazkvzepJA_j-dJhIMlMov1LR61yZgEg6f6LbZrwVXsx7vbDSVFdVW319YC8gRtMjLtfqotkuCx_clzFYeZmgbGLtU594btiF10fv7Y0cPgm7pvcbxjMaKFJMdt4aNn1NPFKun2oNB-7-dCIU4GnUX-2haz1BRJQ0M39-_xB6lIayvjrTamBKCxIayJqFRkDv3gYjxgdYDXFenvEcHnmUI6EF1cExINRLvqSKs71s-r7gXVmxn2BPjkvaefYaJO-TeXL2Ad8EkOUdiqIHUGLCA1zm862RY8zK4RQqENJPMYOzxGv4f8v1-euoXjMzQqwsd5e5NPtMYTcsL3AWQ', 
	baseUrl: BASE_URL,
  });

export const handle: Handle = sequence(withClerkHandler(), ({ event, resolve }) => {
	event.locals.security = new Security(event);

	return resolve(event);
});
