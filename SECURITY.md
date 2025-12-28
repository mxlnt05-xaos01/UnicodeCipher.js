# Security Policy

## Supported Versions

To use it, you need to have the following versions.

| Programming Language | Supported Versions | Client-Side Compatibility | Server-Side Compatibility | Unicode Compatibility |
| ------------------ | ------------------- | --------------------------- | ------------------------- | ---------------------- |
| Javascript | ES6 or Newer | :white_check_mark: | :white_check_mark: | Yes |
| Node.js | v24.12.x or Newer | :white_check_mark: | :white_check_mark: | Yes |
| Typescript | 5.9.x or Newer | :white_check_mark: | :white_check_mark: | Yes |
| Java | OpenJDK 21.x.x or Newer | :x: | :white_check_mark: | Yes (since v1.0) |
| C# and .NET | v12.x or Newer / .NET 8 or Newer | :x: | :white_check_mark: | Yes |
| Python | v3.12 or Newer | :x: | :white_check_mark: | Yes (No for Python v2) |

## Reporting a Vulnerability

Should you notice a vulnerability in the code, any possible loopholes, or possible points where code injections can occur, please post it in the issues section, as I will check it at some point while I am on the computer. It may take some time depending on how big the vulnerability is, whether closing it can cause bugs, and the process itself. Please be patient and I will respond after I am done with this task.

# Sensitive Data Handling

## Standard Rules

It is highly advised to not put sensitive data (i.e. phone number, address, first/last name, social security number, your bank number, username, or password in any input fields, as this information can get stolen the site of which these scripts are deployed has suffered a data breach or is not secure.

## For Websites (Read this if you intend on making a Sign Up/Log In Form

If for whatever reason you need their to store sensitive information, you need to keep that information private. There are several ways to prevent sensitive information from being stolen:

  1. PHP: HtmlSpecialChars() - This action in PHP allows for form validation and can prevent client-side injections by replacing certain characters with their html equivalent placeholders, preventing information from getting leaked and is safer.
     ```php
     <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
     // Paste this in your PHP Code.
     ```
  3. Node.js: HTTPS Module - This is a built-in module that acts as a secure layer for HTTP + HTTP/2, and protects sensitive information when passed into a website, you need a digital certificate to ensure that information is private.
  4. SQL/MySQL: '?' Placeholder - This placeholder can be placed after WHERE in which the value afterwards is = ?, this can prevent injections that could destroy your database and potentially expose private information to the outside.
     ```js
     let address = "Opuesto";
     let sql = 'SELECT * FROM English WHERE Location = ?'
     con.query(sql, [address], function(err, result) {
       if(err) throw err;
       console.log(result);
     } 
     ```

This may not include all of the options that you take to protect sensitive information, so research ways to secure your website or talk with a cybersecurity specialist.
