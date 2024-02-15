// components/SignupForm.js
'use client';

import { useState } from 'react';
import { Button } from './ui/button';

export default function SignUpForm() {
  const [email, setEmail] = useState('');

  return (
    <div className="bg-dark-brown">
      <div className=" max-w-4xl mx-auto flex gap-16">
        <div className="">
          <h2>Get the latest update</h2>
          <p>
            Get the latest news about out newest product, promotions and sales
          </p>
        </div>
        <div className=" w-1/3">
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:light-pink"
              required
            />
            <Button type="submit" variant="secondary" className="">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
