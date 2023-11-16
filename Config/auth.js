const { AuthenticationDetails, CognitoUser } = require('amazon-cognito-identity-js');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
// Otros módulos y configuraciones para la autenticación con Google

// Configuración de tu User Pool en Cognito
const poolData = {
    UserPoolId: 'us-east-1_eKzEhWVX',
    ClientId: 'us-east-1:083358594481',
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

async function authenticateUser(username, password) {
    //  Lógica para autenticar al usuario con Cognito
  // También puedes incluir aquí la autenticación con Google si es necesario
    const authenticationData = {
      Username: username,
      Password: password,
    };
  
    const authenticationDetails = new AuthenticationDetails(authenticationData);
  
    const userData = {
      Username: username,
      Pool: userPool, // Asumiendo que ya has configurado tu User Pool
    };
  
    const cognitoUser = new CognitoUser(userData);
  //autenticación del usuario de manera asincrónica. 
  /* Una promesa representa un valor que puede estar disponible ahora, en el futuro o nunca. La promesa tiene dos estados posibles: resuelta (fulfilled) o rechazada (rejected).*/
    return new Promise((resolve, reject) => {
        // Aquí puedes extraer atributos personalizados del usuario
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (session) => resolve(session),
        onFailure: (err) => reject(err),
      });
    });
}

module.exports = { authenticateUser, userPool };
