# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 5.1.x   | :white_check_mark: |
| 5.0.x   | :x:                |
| 4.0.x   | :white_check_mark: |
| < 4.0   | :x:                |

## Reporting a Vulnerability

Use this section to tell people how to report a vulnerability.

Tell them where to go, how often they can expect to get an update on a
reported vulnerability, what to expect if the vulnerability is accepted or
declined, etc.

# Sensitive Data Handling

## Standard Rules

It is highly advised to not put sensitive data (i.e. phone number, address, first/last name, social security number, your bank number, username, or password in any input fields, as this information can get stolen the site of which these scripts are deployed has suffered a data breach or is not secure.

## For Websites (Read this if you intend on making a Sign Up/Log In Form

If for whatever reason you need their to store sensitive information, you need to keep that information private. There are several ways to prevent sensitive information from being stolen:

  1. PHP: HtmlSpecialChars() - This action in PHP allows for form validation and can prevent client-side injections by replacing certain characters with their html equivalent placeholders, preventing information from getting leaked and is safer.
  2. Node.js: HTTPS Module - This is a built-in module that acts as a secure layer for HTTP + HTTP/2, and protects sensitive information when passed into a website, you need a digital certificate to ensure that information is private.
  3. SQL/MySQL: '?' Placeholder - This placeholder can be placed after WHERE in which the value afterwards is = ?, this can prevent injections that could destroy your database and potentially expose private information to the outside.

This may not include all of the options that you take to protect sensitive information, so research ways to secure your website or talk with a cybersecurity specialist.
