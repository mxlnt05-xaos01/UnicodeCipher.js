<%@ page language="java" contentType="text/html"; charset="UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <meta name="description" content="">
    </head>
    <body>
        <%
            String InputName = request.getParameter("");
            String KeywordInput = request.getParameter("");

            char[] InputCharArray = InputName.toCharArray();
            char[] KeywordCharArray = KeywordInput.toCharArray();

            int[] DecInput = new int[InputCharArray.length];
            int[] DecKey = new int[KeywordCharArray.length];

            for(int s = 0; s < KeywordCharArray.length; s++) {
                DecKey[s] = (int) KeywordCharArray[s];
            }

            for(int i = 0; i < InputCharArray.length; i++) {
                DecInput[i] = (int) InputCharArray[i];
            }

            int[] Funnel = new int[InputCharArray.length];

            for(int in = 0, int key = 0; in < InputCharArray.length; in++) {
                if(DecInput[in] - DecKey[key] < 0) {
                    key++;
                    Funnel[in] = (DecInput[in] + DecKey[key]) - 32;
                }
                else {
                    key = 0;
                    Funnel[in] = (DecInput[in] - DecKey[key]) + 32;
                }
            }

            char[] Final = new char[Funnel.length];

            for(int e = 0; e < Funnel.length; e++) {
                Final[e] = (char) Funnel[e];
            }

            String Result = String.join("", Final);
            
            out.println(Result);
        %>
    </body>
</html>