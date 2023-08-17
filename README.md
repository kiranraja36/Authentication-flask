# Authentication-flask
we use JSON Web Tokens (JWT) to authenticate users of your API. First, a user will have to login using a specially created route which returns a token.

# About-JWT
JSON Web Token (JWT) is a compact, URL-safe means of representing claims (information) between two parties. It's commonly used for securely transmitting information between a client (usually a browser or mobile app) and a server. JWTs consist of three parts: a header, a payload, and a signature. 

Header: The header typically consists of two parts: the type of the token (JWT) and the signing algorithm being used, such as HMAC SHA256 or RSA. 

Payload: The payload contains the claims. Claims are statements about an entity (typically, the user) and additional metadata. There are three types of claims: registered, public, and private claims. Registered claims include things like issuer (iss), subject (sub), expiration time (exp), and more. Public claims are defined by those using JWTs, while private claims are custom claims used to share information between parties that agree on their meaning.

Signature: To create the signature part you have to take the encoded header, the encoded payload, a secret, and the algorithm specified in the header, and sign that.

The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way. To verify a JWT, the receiving party performs the same hash and signature algorithm on the received header and payload using the secret key shared with the issuing party. If the recalculated signature matches the signature present in the JWT, the message's integrity is confirmed.

JWTs are often used in authentication and authorization scenarios. For instance, in a web application, a user might log in and receive a JWT upon successful authentication. This JWT can be sent in the headers of subsequent requests, allowing the server to identify the user and determine whether they have the necessary permissions to access certain resources without the need for frequent database lookups.

It's important to note that while JWTs are convenient and widely used, their security heavily relies on how well they are implemented. Care should be taken to ensure proper validation, protection against token substitution, and secure key management.

Keep in mind that my knowledge is based on information available up until September 2021, and there might have been developments or changes since then.

