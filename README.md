## JetBrains Promise Reject Test Problems

This is a minimal project with only one test file and jest installed as devDependency

Our App Test contains 1 Story with 4 Test cases:

1. Expect two different strings to be equal while inside a promise.
    
    Since there's no error handling, the failed expectation will cause the promise to be rejected.<br />
     
    If you run the whole story, this test will be marked as successful and show no output on it's own output screen.
    
    You can however see the fail message on the overall "Test Results" output screen being appended to the fail and error from the second test.
    
2. Expect two different strings to be equal while in a promise, but fail explicitly in catch.

    Here we added error handling, but now see the error output twice. 
    
    Once for the failing test and once more for the caught failing test that is rethrown/refailed.

     
3. Reference Test for pass - No output

4. Reference Test for fail - Only the fail is printed
