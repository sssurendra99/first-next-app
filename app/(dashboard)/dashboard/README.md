## Routing - uses the folders to do that unline react router dom.

- Nested routing concept.

    - dashboard/analytics
    - dashboard/users etc.

- Dynamic routing concept.

    - Wrap the part that changes in the square brackets. [ ]
        - eg: dashboard/users/[user]

    - Here, encountered a warning.
        - Had to use async/await because the dynamic apis are asynchronous now.