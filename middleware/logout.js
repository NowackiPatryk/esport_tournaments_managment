export default function({ app, redirect }) {
    app.$cookies.remove('currentUser');
    return redirect('/login');
}