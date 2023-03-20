user routes endpoint ::
/api/user   >> to get all users with username field only 
/api/user/:id   >>  get a single user with it's full details 
/api/user   >> create user with details
/api/:id/details >> create a details for that user id 
/api/user/:id >> update user with spacific fields
/api/user/:id >> delete user 

returns 
{
    data:{userdata},
    status:resStatus,
    message:if any error messages
}