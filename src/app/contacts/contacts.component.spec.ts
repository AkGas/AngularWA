/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ContactsComponent } from './contacts.component';

describe('Component: Contacts', () => {
  it('should create an instance', () => {
    let component = new ContactsComponent();
    expect(component).toBeTruthy();
  });
});
