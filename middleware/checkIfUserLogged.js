export default function({ app, redirect }) {
    const currentUser = app.$cookies.get('currentUser');
    return currentUser ? redirect('/dashboard') : redirect('/login');
}