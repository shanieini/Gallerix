import React from 'react';
import { Header } from './cmps/header';
import { MainApp } from './pages/main-app';
import { Footer } from './cmps/footer';
import { UserMsg } from './cmps/user-msg';

export const App = () => {
  return (
    <section className="App">
      <Header />
      <UserMsg />
      <MainApp />
      <Footer />
    </section>
  );
}

