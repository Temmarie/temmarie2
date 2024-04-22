
#Create the root cert
$cert = New-SelfSignedCertificate -Type Custom -KeySpec Signature `
-Subject "CN=AzureRootCert" -KeyExportPolicy Exportable `
-HashAlgorithm sha256 -KeyLength 2048 `
-CertStoreLocation "Cert:\CurrentUser\My"  `
-KeyUsageProperty Sign -KeyUsage CertSign

 # Create Client Cert
New-SelfSignedCertificate -Type Custom -DnsName P2SChildCert -KeySpec Signature `
-Subject "CN=AzureClientCert" -KeyExportPolicy Exportable `
-HashAlgorithm sha256 -KeyLength 2048 `
-CertStoreLocation "Cert:\CurrentUser\My" `
-Signer $cert -TextExtension @("2.5.29.37={text}1.3.6.1.5.5.7.3.2")

172.16.1.0/24

MIIC6zCCAdOgAwIBAgIQGiMsgQLT2Y5PCf4nlj1ncTANBgkqhkiG9w0BAQsFADAY
MRYwFAYDVQQDDA1BenVyZVJvb3RDZXJ0MB4XDTI0MDQyMjE3MjIwM1oXDTI1MDQy
MjE3NDIwM1owGDEWMBQGA1UEAwwNQXp1cmVSb290Q2VydDCCASIwDQYJKoZIhvcN
AQEBBQADggEPADCCAQoCggEBAIDOoKXzu3OyAkBUUM9xCUou8+0RQTjHVuytz2vO
vp2Y0rI8YaPQOFko3ooM6KLREb2CY/IabXXiz9okfu0QRFKfTFq0zLrASxPzdkv6
jLn7V64hGBTIkYVdCbCljcXxPQ5DRgpXhdweQTlYjrWPp6f4HdxgqsVG5wyCv4wv
4lbOCKqdIDXMzkplPwdTzCuv5qyqBA//Nn2VB6Tnz5uxblRF1jkv9RV7XWjQYLVD
cvHMOnyy3XwpBK/5QswfKgRwjLyn3stRzOcUwbdY1Jw/M74HAJV560yQ1ih0BS7h
J+Nb5iMQ00S1GZLmIX7rJ+wyybjM3KOhv7HWp3oh40e0GK8CAwEAAaMxMC8wDgYD
VR0PAQH/BAQDAgIEMB0GA1UdDgQWBBQDqsxuQ/06nZi4eH8ZSBrX0/qVgzANBgkq
hkiG9w0BAQsFAAOCAQEAOsspj/nVxmhcFxXyW3Enosras7QhXpcUVSQbmWgk5wk1
RFx2f54x2e8qQGa45SJ7VZxGaGZOsn8ybET8UT4UMDmnPjEjIFZI33B1Pa2c5hIu
iv/10KZGSzd1/QFMLrO/q6bEnH2n3rnUgkMUi1MY4PdGV+5O2cYu/+7s18jicJvT
UzDACXJ9l9hyXRRNZbe4rAe6A61xFFkmXwvMbpZknKRvesro0iQkEOWZ/qSYoQ9K
lPwgFpwMptNrLuVJhOGcI4gJ+M2W/M2Yi5FLa7d7N8Uzw1VT8/BItP0rUQm+8dP/
TB3rk8GI1vBr92G1M2e5O28LlxqgOuNWEONRWnLnwA==
