import React, { useState } from 'react';
import '../styles/Contact.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [payment, setPayment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simule o sucesso da requisição
    toast.success('Pedido criado com sucesso!');

    // Limpar o formulário
    setName('');
    setEmail('');
    setMessage('');
    setPayment('');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Gostou? Faça seu pedido</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Lanche:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Digite seu lanche"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Forma de pagamento:</label>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="pix"
                  checked={payment === 'pix'}
                  onChange={(e) => setPayment(e.target.value)}
                  required
                /> Pix
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="debito"
                  checked={payment === 'debito'}
                  onChange={(e) => setPayment(e.target.value)}
                /> Débito
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="credito"
                  checked={payment === 'credito'}
                  onChange={(e) => setPayment(e.target.value)}
                /> Crédito
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="avista"
                  checked={payment === 'avista'}
                  onChange={(e) => setPayment(e.target.value)}
                /> Dinheiro
              </label>
            </div>
          </div>
          <button type="submit">Enviar</button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
