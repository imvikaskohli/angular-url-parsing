# angular-url-parsing
Parse query string data in Angular

Let’s consider an example, suppose we have an URL with query String like

https://github.com/imvikaskohli/?random=01ngABHgO1jzuuvEces/h+b3eth/2mBSraHEQ2cyFkRTYd2mo+/pVmTLwIhkny8wCHFdoKYJ6apQgxDGxZ7M4Q==

Now If I directly put the URL in the browser, it changes to the following URL

https://github.com/imvikaskohli/?random=01ngABHgO1jzuuvEces%2Fh%20b3eth%2F2mBSraHEQ2cyFkRTYd2mo%20%2FpVmTLwIhkny8wCHFdoKYJ6apQgxDGxZ7M4Q%3D%3D

But by using URL Serializer, we can avooid this and also able to fetch the query params as it is
