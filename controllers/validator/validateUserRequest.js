const Joi = require('joi');

function validatUserRequest(data){

	const schema = Joi.object({	
	
		id: Joi.number(),
		username: Joi.string().min(3).max(120).required(),
        password:Joi.string().required(),
        confirm_password: Joi.string()
            .valid(Joi.ref('password'))
            .required(),//not working
        role:Joi.string().valid('admin','user','guest'),
		token:Joi.string(),
	
	});

	return schema.validate(data);
}

function validatUserRequestGeneral(data){

	const schema = Joi.object({	
	
		id: Joi.number(),
		username: Joi.string().min(3).max(120),
        password:Joi.string().min(8),
        confirm_password: Joi.string().valid(Joi.ref('password')),//not working
		token:Joi.string(),
        role:Joi.string().valid('admin','user','guest'),

		userDetails: {
            
            first_name: Joi.string(),
            last_name: Joi.string(),
		    email: Joi.string().email(),
            gender:Joi.valid('male','female'),
            age:Joi.date(),
            address:Joi.string()
        }
	
	});

	return schema.validate(data);
}

function validatUserDetailsRequestGeneral(data){

	const schema = Joi.object({	
            
            first_name: Joi.string(),
            last_name: Joi.string(),
		    email: Joi.string().email(),
            gender:Joi.valid('male','female'),
            age:Joi.date(),
            address:Joi.string()
	
	});

	return schema.validate(data);
}

function validatePasswordChangeRequest(data){
    const schema = Joi.object({
        old_password:Joi.string().required(),
        new_password:Joi.string().required().min(8),
        confirm_password: Joi.string().min(8).valid(Joi.ref('new_password')).required()
    })

    return  schema.validate(data);
}

module.exports = {
    validatUserRequest,
    validatUserRequestGeneral,
    validatUserDetailsRequestGeneral,
    validatePasswordChangeRequest
};
