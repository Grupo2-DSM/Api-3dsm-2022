export class CredenciaisUsuario{
    email!: string
    senha!: string
}

export interface DadosUsuario{
    id: string
    nome: string
    credenciais: {
        email: string,
        senha: string
    }
    cargos:[
        'ROLE_ADMIN' | 'ROLE_SUPPORT' | 'ROLE_USER'
    ]
}

export class CredenciaisNewPassword{
    email!: string | undefined
    senha!: string
    confirmarSenha!: string
}